import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { GetWebACLForResourceRequest, GetWebACLForResourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetWebACLForResourceCommandInput = GetWebACLForResourceRequest;
export declare type GetWebACLForResourceCommandOutput = GetWebACLForResourceResponse & __MetadataBearer;
export declare class GetWebACLForResourceCommand extends $Command<GetWebACLForResourceCommandInput, GetWebACLForResourceCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: GetWebACLForResourceCommandInput;
    constructor(input: GetWebACLForResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWebACLForResourceCommandInput, GetWebACLForResourceCommandOutput>;
    private serialize;
    private deserialize;
}
