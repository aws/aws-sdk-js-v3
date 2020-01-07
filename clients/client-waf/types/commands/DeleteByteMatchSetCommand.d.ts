import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { DeleteByteMatchSetRequest, DeleteByteMatchSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteByteMatchSetCommandInput = DeleteByteMatchSetRequest;
export declare type DeleteByteMatchSetCommandOutput = DeleteByteMatchSetResponse & __MetadataBearer;
export declare class DeleteByteMatchSetCommand extends $Command<DeleteByteMatchSetCommandInput, DeleteByteMatchSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: DeleteByteMatchSetCommandInput;
    constructor(input: DeleteByteMatchSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteByteMatchSetCommandInput, DeleteByteMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}
