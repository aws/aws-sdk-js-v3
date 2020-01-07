import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListHostedZonesRequest, ListHostedZonesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListHostedZonesCommandInput = ListHostedZonesRequest;
export declare type ListHostedZonesCommandOutput = ListHostedZonesResponse & __MetadataBearer;
export declare class ListHostedZonesCommand extends $Command<ListHostedZonesCommandInput, ListHostedZonesCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListHostedZonesCommandInput;
    constructor(input: ListHostedZonesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHostedZonesCommandInput, ListHostedZonesCommandOutput>;
    private serialize;
    private deserialize;
}
