import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { SelectResourceConfigRequest, SelectResourceConfigResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SelectResourceConfigCommandInput = SelectResourceConfigRequest;
export declare type SelectResourceConfigCommandOutput = SelectResourceConfigResponse & __MetadataBearer;
export declare class SelectResourceConfigCommand extends $Command<SelectResourceConfigCommandInput, SelectResourceConfigCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: SelectResourceConfigCommandInput;
    constructor(input: SelectResourceConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SelectResourceConfigCommandInput, SelectResourceConfigCommandOutput>;
    private serialize;
    private deserialize;
}
