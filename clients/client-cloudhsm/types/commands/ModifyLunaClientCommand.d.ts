import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { ModifyLunaClientRequest, ModifyLunaClientResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyLunaClientCommandInput = ModifyLunaClientRequest;
export declare type ModifyLunaClientCommandOutput = ModifyLunaClientResponse & __MetadataBearer;
export declare class ModifyLunaClientCommand extends $Command<ModifyLunaClientCommandInput, ModifyLunaClientCommandOutput, CloudHSMClientResolvedConfig> {
    readonly input: ModifyLunaClientCommandInput;
    constructor(input: ModifyLunaClientCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyLunaClientCommandInput, ModifyLunaClientCommandOutput>;
    private serialize;
    private deserialize;
}
