import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { RestoreServerRequest, RestoreServerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RestoreServerCommandInput = RestoreServerRequest;
export declare type RestoreServerCommandOutput = RestoreServerResponse & __MetadataBearer;
export declare class RestoreServerCommand extends $Command<RestoreServerCommandInput, RestoreServerCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: RestoreServerCommandInput;
    constructor(input: RestoreServerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreServerCommandInput, RestoreServerCommandOutput>;
    private serialize;
    private deserialize;
}
