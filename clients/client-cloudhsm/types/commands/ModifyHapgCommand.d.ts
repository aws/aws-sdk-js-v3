import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { ModifyHapgRequest, ModifyHapgResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyHapgCommandInput = ModifyHapgRequest;
export declare type ModifyHapgCommandOutput = ModifyHapgResponse & __MetadataBearer;
export declare class ModifyHapgCommand extends $Command<ModifyHapgCommandInput, ModifyHapgCommandOutput, CloudHSMClientResolvedConfig> {
    readonly input: ModifyHapgCommandInput;
    constructor(input: ModifyHapgCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyHapgCommandInput, ModifyHapgCommandOutput>;
    private serialize;
    private deserialize;
}
