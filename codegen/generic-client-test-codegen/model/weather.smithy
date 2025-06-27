$version: "2.0"

namespace example.weather

use aws.auth#sigv4
use aws.protocols#restJson1

@authDefinition
@trait
structure customAuth {}

@restJson1
@httpApiKeyAuth(name: "X-Api-Key", in: "header")
@httpBearerAuth
@sigv4(name: "weather")
@customAuth
@auth([sigv4])
service Weather {
    version: "2006-03-01"
    operations: [
        // Identity and Auth
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

@readonly
@http(method: "GET", uri: "/OnlyHttpApiKeyAuth")
@auth([httpApiKeyAuth])
operation OnlyHttpApiKeyAuth {}

@readonly
@http(method: "GET", uri: "/OnlyHttpBearerAuth")
@auth([httpBearerAuth])
operation OnlyHttpBearerAuth {}

@readonly
@http(method: "GET", uri: "/OnlySigv4Auth")
@auth([sigv4])
operation OnlySigv4Auth {}

@readonly
@http(method: "GET", uri: "/OnlyHttpApiKeyAndBearerAuth")
@auth([httpApiKeyAuth, httpBearerAuth])
operation OnlyHttpApiKeyAndBearerAuth {}

@readonly
@http(method: "GET", uri: "/OnlyHttpApiKeyAndBearerAuthReversed")
@auth([httpBearerAuth, httpApiKeyAuth])
operation OnlyHttpApiKeyAndBearerAuthReversed {}

@readonly
@http(method: "GET", uri: "/OnlyHttpApiKeyAuthOptional")
@auth([httpApiKeyAuth])
@optionalAuth
operation OnlyHttpApiKeyAuthOptional {}

@readonly
@http(method: "GET", uri: "/OnlyHttpBearerAuthOptional")
@auth([httpBearerAuth])
@optionalAuth
operation OnlyHttpBearerAuthOptional {}

@readonly
@http(method: "GET", uri: "/OnlySigv4AuthOptional")
@auth([sigv4])
@optionalAuth
operation OnlySigv4AuthOptional {}

@readonly
@http(method: "GET", uri: "/OnlyCustomAuth")
@auth([customAuth])
operation OnlyCustomAuth {}

@readonly
@http(method: "GET", uri: "/OnlyCustomAuthOptional")
@auth([customAuth])
@optionalAuth
operation OnlyCustomAuthOptional {}

@readonly
@http(method: "GET", uri: "/SameAsService")
operation SameAsService {
  output := {
    service: String
  }
}
