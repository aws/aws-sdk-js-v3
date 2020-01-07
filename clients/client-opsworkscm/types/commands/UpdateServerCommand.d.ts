import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { UpdateServerRequest, UpdateServerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateServerCommandInput = UpdateServerRequest;
export declare type UpdateServerCommandOutput = UpdateServerResponse & __MetadataBearer;
export declare class UpdateServerCommand extends $Command<UpdateServerCommandInput, UpdateServerCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: UpdateServerCommandInput;
    constructor(input: UpdateServerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateServerCommandInput, UpdateServerCommandOutput>;
    private serialize;
    private deserialize;
}
