import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { CreateHsmRequest, CreateHsmResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateHsmCommandInput = CreateHsmRequest;
export declare type CreateHsmCommandOutput = CreateHsmResponse & __MetadataBearer;
export declare class CreateHsmCommand extends $Command<CreateHsmCommandInput, CreateHsmCommandOutput, CloudHSMV2ClientResolvedConfig> {
    readonly input: CreateHsmCommandInput;
    constructor(input: CreateHsmCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHsmCommandInput, CreateHsmCommandOutput>;
    private serialize;
    private deserialize;
}
