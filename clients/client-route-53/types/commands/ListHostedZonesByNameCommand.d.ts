import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListHostedZonesByNameRequest, ListHostedZonesByNameResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListHostedZonesByNameCommandInput = ListHostedZonesByNameRequest;
export declare type ListHostedZonesByNameCommandOutput = ListHostedZonesByNameResponse & __MetadataBearer;
export declare class ListHostedZonesByNameCommand extends $Command<ListHostedZonesByNameCommandInput, ListHostedZonesByNameCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListHostedZonesByNameCommandInput;
    constructor(input: ListHostedZonesByNameCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHostedZonesByNameCommandInput, ListHostedZonesByNameCommandOutput>;
    private serialize;
    private deserialize;
}
