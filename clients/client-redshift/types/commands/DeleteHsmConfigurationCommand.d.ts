import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteHsmConfigurationMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteHsmConfigurationCommandInput = DeleteHsmConfigurationMessage;
export declare type DeleteHsmConfigurationCommandOutput = __MetadataBearer;
export declare class DeleteHsmConfigurationCommand extends $Command<DeleteHsmConfigurationCommandInput, DeleteHsmConfigurationCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DeleteHsmConfigurationCommandInput;
    constructor(input: DeleteHsmConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteHsmConfigurationCommandInput, DeleteHsmConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
