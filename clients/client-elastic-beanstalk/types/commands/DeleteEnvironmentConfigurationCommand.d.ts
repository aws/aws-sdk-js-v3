import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DeleteEnvironmentConfigurationMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteEnvironmentConfigurationCommandInput = DeleteEnvironmentConfigurationMessage;
export declare type DeleteEnvironmentConfigurationCommandOutput = __MetadataBearer;
export declare class DeleteEnvironmentConfigurationCommand extends $Command<DeleteEnvironmentConfigurationCommandInput, DeleteEnvironmentConfigurationCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DeleteEnvironmentConfigurationCommandInput;
    constructor(input: DeleteEnvironmentConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEnvironmentConfigurationCommandInput, DeleteEnvironmentConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
