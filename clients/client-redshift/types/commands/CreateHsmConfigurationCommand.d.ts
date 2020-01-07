import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateHsmConfigurationMessage, CreateHsmConfigurationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateHsmConfigurationCommandInput = CreateHsmConfigurationMessage;
export declare type CreateHsmConfigurationCommandOutput = CreateHsmConfigurationResult & __MetadataBearer;
export declare class CreateHsmConfigurationCommand extends $Command<CreateHsmConfigurationCommandInput, CreateHsmConfigurationCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: CreateHsmConfigurationCommandInput;
    constructor(input: CreateHsmConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHsmConfigurationCommandInput, CreateHsmConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
