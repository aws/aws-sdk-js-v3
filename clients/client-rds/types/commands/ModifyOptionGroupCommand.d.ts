import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyOptionGroupMessage, ModifyOptionGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyOptionGroupCommandInput = ModifyOptionGroupMessage;
export declare type ModifyOptionGroupCommandOutput = ModifyOptionGroupResult & __MetadataBearer;
export declare class ModifyOptionGroupCommand extends $Command<ModifyOptionGroupCommandInput, ModifyOptionGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyOptionGroupCommandInput;
    constructor(input: ModifyOptionGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyOptionGroupCommandInput, ModifyOptionGroupCommandOutput>;
    private serialize;
    private deserialize;
}
