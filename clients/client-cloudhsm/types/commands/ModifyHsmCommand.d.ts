import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { ModifyHsmRequest, ModifyHsmResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyHsmCommandInput = ModifyHsmRequest;
export declare type ModifyHsmCommandOutput = ModifyHsmResponse & __MetadataBearer;
export declare class ModifyHsmCommand extends $Command<ModifyHsmCommandInput, ModifyHsmCommandOutput, CloudHSMClientResolvedConfig> {
    readonly input: ModifyHsmCommandInput;
    constructor(input: ModifyHsmCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyHsmCommandInput, ModifyHsmCommandOutput>;
    private serialize;
    private deserialize;
}
