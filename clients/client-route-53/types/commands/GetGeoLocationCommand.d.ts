import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetGeoLocationRequest, GetGeoLocationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetGeoLocationCommandInput = GetGeoLocationRequest;
export declare type GetGeoLocationCommandOutput = GetGeoLocationResponse & __MetadataBearer;
export declare class GetGeoLocationCommand extends $Command<GetGeoLocationCommandInput, GetGeoLocationCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetGeoLocationCommandInput;
    constructor(input: GetGeoLocationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetGeoLocationCommandInput, GetGeoLocationCommandOutput>;
    private serialize;
    private deserialize;
}
