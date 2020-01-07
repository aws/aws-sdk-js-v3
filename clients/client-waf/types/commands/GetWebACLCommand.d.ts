import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { GetWebACLRequest, GetWebACLResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetWebACLCommandInput = GetWebACLRequest;
export declare type GetWebACLCommandOutput = GetWebACLResponse & __MetadataBearer;
export declare class GetWebACLCommand extends $Command<GetWebACLCommandInput, GetWebACLCommandOutput, WAFClientResolvedConfig> {
    readonly input: GetWebACLCommandInput;
    constructor(input: GetWebACLCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetWebACLCommandInput, GetWebACLCommandOutput>;
    private serialize;
    private deserialize;
}
