import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { GetSampledRequestsRequest, GetSampledRequestsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSampledRequestsCommandInput = GetSampledRequestsRequest;
export declare type GetSampledRequestsCommandOutput = GetSampledRequestsResponse & __MetadataBearer;
export declare class GetSampledRequestsCommand extends $Command<GetSampledRequestsCommandInput, GetSampledRequestsCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: GetSampledRequestsCommandInput;
    constructor(input: GetSampledRequestsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSampledRequestsCommandInput, GetSampledRequestsCommandOutput>;
    private serialize;
    private deserialize;
}
