import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { CreateHsmRequest, CreateHsmResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateHsmCommandInput = CreateHsmRequest;
export declare type CreateHsmCommandOutput = CreateHsmResponse & __MetadataBearer;
export declare class CreateHsmCommand extends $Command<CreateHsmCommandInput, CreateHsmCommandOutput, CloudHSMClientResolvedConfig> {
    readonly input: CreateHsmCommandInput;
    constructor(input: CreateHsmCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHsmCommandInput, CreateHsmCommandOutput>;
    private serialize;
    private deserialize;
}
