import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { SearchLocalGatewayRoutesRequest, SearchLocalGatewayRoutesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchLocalGatewayRoutesCommandInput = SearchLocalGatewayRoutesRequest;
export declare type SearchLocalGatewayRoutesCommandOutput = SearchLocalGatewayRoutesResult & __MetadataBearer;
export declare class SearchLocalGatewayRoutesCommand extends $Command<SearchLocalGatewayRoutesCommandInput, SearchLocalGatewayRoutesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: SearchLocalGatewayRoutesCommandInput;
    constructor(input: SearchLocalGatewayRoutesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchLocalGatewayRoutesCommandInput, SearchLocalGatewayRoutesCommandOutput>;
    private serialize;
    private deserialize;
}
