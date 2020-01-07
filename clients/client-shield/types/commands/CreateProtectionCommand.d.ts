import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { CreateProtectionRequest, CreateProtectionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateProtectionCommandInput = CreateProtectionRequest;
export declare type CreateProtectionCommandOutput = CreateProtectionResponse & __MetadataBearer;
export declare class CreateProtectionCommand extends $Command<CreateProtectionCommandInput, CreateProtectionCommandOutput, ShieldClientResolvedConfig> {
    readonly input: CreateProtectionCommandInput;
    constructor(input: CreateProtectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProtectionCommandInput, CreateProtectionCommandOutput>;
    private serialize;
    private deserialize;
}
