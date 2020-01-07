import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { DeleteLunaClientRequest, DeleteLunaClientResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLunaClientCommandInput = DeleteLunaClientRequest;
export declare type DeleteLunaClientCommandOutput = DeleteLunaClientResponse & __MetadataBearer;
export declare class DeleteLunaClientCommand extends $Command<DeleteLunaClientCommandInput, DeleteLunaClientCommandOutput, CloudHSMClientResolvedConfig> {
    readonly input: DeleteLunaClientCommandInput;
    constructor(input: DeleteLunaClientCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLunaClientCommandInput, DeleteLunaClientCommandOutput>;
    private serialize;
    private deserialize;
}
