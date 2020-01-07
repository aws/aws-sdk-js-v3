import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeletePolicyVersionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeletePolicyVersionCommandInput = DeletePolicyVersionRequest;
export declare type DeletePolicyVersionCommandOutput = __MetadataBearer;
export declare class DeletePolicyVersionCommand extends $Command<DeletePolicyVersionCommandInput, DeletePolicyVersionCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeletePolicyVersionCommandInput;
    constructor(input: DeletePolicyVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePolicyVersionCommandInput, DeletePolicyVersionCommandOutput>;
    private serialize;
    private deserialize;
}
