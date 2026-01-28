$version: "2"

namespace example.weather

/// Provides weather forecasts.
@paginated(inputToken: "nextToken", outputToken: "nextToken", pageSize: "pageSize")
service Weather {
    version: "2006-03-01"
    resources: [
        City
    ]
    operations: [
        GetCurrentTime
    ]
}

resource City {
    identifiers: { cityId: CityId }
    properties: { coordinates: CityCoordinates }
    read: GetCity
    list: ListCities
    resources: [
        Forecast
    ]
}

resource Forecast {
    identifiers: { cityId: CityId }
    properties: { chanceOfRain: Float }
    read: GetForecast
}

// "pattern" is a trait.
@pattern("^[A-Za-z0-9 ]+$")
string CityId

@readonly
operation GetCity {
    input := for City {
        // "cityId" provides the identifier for the resource and
        // has to be marked as required.
        @required
        $cityId
    }

    output := for City {
        // "required" is used on output to indicate if the service
        // will always provide a value for the member.
        @required
        @notProperty
        name: String

        @required
        $coordinates
    }

    errors: [
        NoSuchResource
    ]
}

// This structure is nested within GetCityOutput.
structure CityCoordinates {
    @required
    latitude: Float

    @required
    longitude: Float
}

// "error" is a trait that is used to specialize
// a structure as an error.
@error("client")
structure NoSuchResource {
    @required
    resourceType: String
}

// The paginated trait indicates that the operation may
// return truncated results.
@readonly
@paginated(items: "items")
operation ListCities {
    input := {
        nextToken: String
        pageSize: Integer
    }

    output := {
        nextToken: String

        @required
        items: CitySummaries
    }
}

// CitySummaries is a list of CitySummary structures.
list CitySummaries {
    member: CitySummary
}

// CitySummary contains a reference to a City.
@references([
    {
        resource: City
    }
])
structure CitySummary {
    @required
    cityId: CityId

    @required
    name: String
}

@readonly
operation GetCurrentTime {
    output := {
        @required
        time: Timestamp
    }
}

@readonly
operation GetForecast {
    input := for Forecast {
        // "cityId" provides the only identifier for the resource since
        // a Forecast doesn't have its own.
        @required
        $cityId
    }

    output := for Forecast {
        $chanceOfRain
    }
}
