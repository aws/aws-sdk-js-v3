import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { DeleteHapgRequest, DeleteHapgResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteHapgCommandInput = DeleteHapgRequest;
export declare type DeleteHapgCommandOutput = DeleteHapgResponse & __MetadataBearer;
export declare class DeleteHapgCommand extends $Command<DeleteHapgCommandInput, DeleteHapgCommandOutput, CloudHSMClientResolvedConfig> {
    readonly input: DeleteHapgCommandInput;
    constructor(input: DeleteHapgCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteHapgCommandInput, DeleteHapgCommandOutput>;
    private serialize;
    private deserialize;
}
