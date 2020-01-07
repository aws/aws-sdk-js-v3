import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { DeleteServerRequest, DeleteServerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteServerCommandInput = DeleteServerRequest;
export declare type DeleteServerCommandOutput = DeleteServerResponse & __MetadataBearer;
export declare class DeleteServerCommand extends $Command<DeleteServerCommandInput, DeleteServerCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: DeleteServerCommandInput;
    constructor(input: DeleteServerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteServerCommandInput, DeleteServerCommandOutput>;
    private serialize;
    private deserialize;
}
