import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { DeleteWebACLRequest, DeleteWebACLResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteWebACLCommandInput = DeleteWebACLRequest;
export declare type DeleteWebACLCommandOutput = DeleteWebACLResponse & __MetadataBearer;
export declare class DeleteWebACLCommand extends $Command<DeleteWebACLCommandInput, DeleteWebACLCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: DeleteWebACLCommandInput;
    constructor(input: DeleteWebACLCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteWebACLCommandInput, DeleteWebACLCommandOutput>;
    private serialize;
    private deserialize;
}
