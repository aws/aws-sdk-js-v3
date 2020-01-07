import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { SearchTransitGatewayMulticastGroupsRequest, SearchTransitGatewayMulticastGroupsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchTransitGatewayMulticastGroupsCommandInput = SearchTransitGatewayMulticastGroupsRequest;
export declare type SearchTransitGatewayMulticastGroupsCommandOutput = SearchTransitGatewayMulticastGroupsResult & __MetadataBearer;
export declare class SearchTransitGatewayMulticastGroupsCommand extends $Command<SearchTransitGatewayMulticastGroupsCommandInput, SearchTransitGatewayMulticastGroupsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: SearchTransitGatewayMulticastGroupsCommandInput;
    constructor(input: SearchTransitGatewayMulticastGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchTransitGatewayMulticastGroupsCommandInput, SearchTransitGatewayMulticastGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
