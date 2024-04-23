$version: "2.0"

namespace example.weather

use aws.auth#sigv4

@authDefinition
@trait
structure customAuth {}

@trait
@protocolDefinition
structure fakeProtocol {}

@fakeProtocol
@httpApiKeyAuth(name: "X-Api-Key", in: "header")
@httpBearerAuth
@sigv4(name: "weather")
@customAuth
@auth([sigv4])
service Weather {
    version: "2006-03-01"
    operations: [
        // experimentalIdentityAndAuth
        OnlyHttpApiKeyAuth
        OnlyHttpApiKeyAuthOptional
        OnlyHttpBearerAuth
        OnlyHttpBearerAuthOptional
        OnlyHttpApiKeyAndBearerAuth
        OnlyHttpApiKeyAndBearerAuthReversed
        OnlySigv4Auth
        OnlySigv4AuthOptional
        OnlyCustomAuth
        OnlyCustomAuthOptional
        SameAsService
    ]
}

@http(method: "GET", uri: "/OnlyHttpApiKeyAuth")
@auth([httpApiKeyAuth])
operation OnlyHttpApiKeyAuth {}

@http(method: "GET", uri: "/OnlyHttpBearerAuth")
@auth([httpBearerAuth])
operation OnlyHttpBearerAuth {}

@http(method: "GET", uri: "/OnlySigv4Auth")
@auth([sigv4])
operation OnlySigv4Auth {}

@http(method: "GET", uri: "/OnlyHttpApiKeyAndBearerAuth")
@auth([httpApiKeyAuth, httpBearerAuth])
operation OnlyHttpApiKeyAndBearerAuth {}

@http(method: "GET", uri: "/OnlyHttpApiKeyAndBearerAuthReversed")
@auth([httpBearerAuth, httpApiKeyAuth])
operation OnlyHttpApiKeyAndBearerAuthReversed {}

@http(method: "GET", uri: "/OnlyHttpApiKeyAuthOptional")
@auth([httpApiKeyAuth])
@optionalAuth
operation OnlyHttpApiKeyAuthOptional {}

@http(method: "GET", uri: "/OnlyHttpBearerAuthOptional")
@auth([httpBearerAuth])
@optionalAuth
operation OnlyHttpBearerAuthOptional {}

@http(method: "GET", uri: "/OnlySigv4AuthOptional")
@auth([sigv4])
@optionalAuth
operation OnlySigv4AuthOptional {}

@http(method: "GET", uri: "/OnlyCustomAuth")
@auth([customAuth])
operation OnlyCustomAuth {}

@http(method: "GET", uri: "/OnlyCustomAuthOptional")
@auth([customAuth])
@optionalAuth
operation OnlyCustomAuthOptional {}

@http(method: "GET", uri: "/SameAsService")
operation SameAsService {
  output := {
    service: String
  }
}
