import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { CreateHapgRequest, CreateHapgResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateHapgCommandInput = CreateHapgRequest;
export declare type CreateHapgCommandOutput = CreateHapgResponse & __MetadataBearer;
export declare class CreateHapgCommand extends $Command<CreateHapgCommandInput, CreateHapgCommandOutput, CloudHSMClientResolvedConfig> {
    readonly input: CreateHapgCommandInput;
    constructor(input: CreateHapgCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHapgCommandInput, CreateHapgCommandOutput>;
    private serialize;
    private deserialize;
}
