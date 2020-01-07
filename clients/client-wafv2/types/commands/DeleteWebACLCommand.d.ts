import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { DeleteWebACLRequest, DeleteWebACLResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteWebACLCommandInput = DeleteWebACLRequest;
export declare type DeleteWebACLCommandOutput = DeleteWebACLResponse & __MetadataBearer;
export declare class DeleteWebACLCommand extends $Command<DeleteWebACLCommandInput, DeleteWebACLCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: DeleteWebACLCommandInput;
    constructor(input: DeleteWebACLCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteWebACLCommandInput, DeleteWebACLCommandOutput>;
    private serialize;
    private deserialize;
}
