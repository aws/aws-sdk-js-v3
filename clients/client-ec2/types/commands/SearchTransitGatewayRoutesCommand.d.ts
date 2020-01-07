import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { SearchTransitGatewayRoutesRequest, SearchTransitGatewayRoutesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchTransitGatewayRoutesCommandInput = SearchTransitGatewayRoutesRequest;
export declare type SearchTransitGatewayRoutesCommandOutput = SearchTransitGatewayRoutesResult & __MetadataBearer;
export declare class SearchTransitGatewayRoutesCommand extends $Command<SearchTransitGatewayRoutesCommandInput, SearchTransitGatewayRoutesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: SearchTransitGatewayRoutesCommandInput;
    constructor(input: SearchTransitGatewayRoutesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchTransitGatewayRoutesCommandInput, SearchTransitGatewayRoutesCommandOutput>;
    private serialize;
    private deserialize;
}
