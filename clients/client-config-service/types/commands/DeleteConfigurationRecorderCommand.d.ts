import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteConfigurationRecorderRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteConfigurationRecorderCommandInput = DeleteConfigurationRecorderRequest;
export declare type DeleteConfigurationRecorderCommandOutput = __MetadataBearer;
export declare class DeleteConfigurationRecorderCommand extends $Command<DeleteConfigurationRecorderCommandInput, DeleteConfigurationRecorderCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteConfigurationRecorderCommandInput;
    constructor(input: DeleteConfigurationRecorderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConfigurationRecorderCommandInput, DeleteConfigurationRecorderCommandOutput>;
    private serialize;
    private deserialize;
}
