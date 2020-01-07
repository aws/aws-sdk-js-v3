import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ApplicationResourceLifecycleDescriptionMessage, UpdateApplicationResourceLifecycleMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateApplicationResourceLifecycleCommandInput = UpdateApplicationResourceLifecycleMessage;
export declare type UpdateApplicationResourceLifecycleCommandOutput = ApplicationResourceLifecycleDescriptionMessage & __MetadataBearer;
export declare class UpdateApplicationResourceLifecycleCommand extends $Command<UpdateApplicationResourceLifecycleCommandInput, UpdateApplicationResourceLifecycleCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: UpdateApplicationResourceLifecycleCommandInput;
    constructor(input: UpdateApplicationResourceLifecycleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateApplicationResourceLifecycleCommandInput, UpdateApplicationResourceLifecycleCommandOutput>;
    private serialize;
    private deserialize;
}
