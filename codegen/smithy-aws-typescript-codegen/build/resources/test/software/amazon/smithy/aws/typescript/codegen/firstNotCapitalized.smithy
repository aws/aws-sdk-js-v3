namespace smithy.example

use aws.protocols#restJson1

@aws.api#service(sdkId: "first Not Capitalized")
@restJson1
service OriginalName {
    version: "2019-10-15",
}
