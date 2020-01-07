import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListGeoLocationsRequest, ListGeoLocationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListGeoLocationsCommandInput = ListGeoLocationsRequest;
export declare type ListGeoLocationsCommandOutput = ListGeoLocationsResponse & __MetadataBearer;
export declare class ListGeoLocationsCommand extends $Command<ListGeoLocationsCommandInput, ListGeoLocationsCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListGeoLocationsCommandInput;
    constructor(input: ListGeoLocationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGeoLocationsCommandInput, ListGeoLocationsCommandOutput>;
    private serialize;
    private deserialize;
}
