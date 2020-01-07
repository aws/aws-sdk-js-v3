import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DeleteConfigurationTemplateMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteConfigurationTemplateCommandInput = DeleteConfigurationTemplateMessage;
export declare type DeleteConfigurationTemplateCommandOutput = __MetadataBearer;
export declare class DeleteConfigurationTemplateCommand extends $Command<DeleteConfigurationTemplateCommandInput, DeleteConfigurationTemplateCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DeleteConfigurationTemplateCommandInput;
    constructor(input: DeleteConfigurationTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConfigurationTemplateCommandInput, DeleteConfigurationTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
