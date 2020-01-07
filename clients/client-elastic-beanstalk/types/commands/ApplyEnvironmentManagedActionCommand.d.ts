import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { ApplyEnvironmentManagedActionRequest, ApplyEnvironmentManagedActionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ApplyEnvironmentManagedActionCommandInput = ApplyEnvironmentManagedActionRequest;
export declare type ApplyEnvironmentManagedActionCommandOutput = ApplyEnvironmentManagedActionResult & __MetadataBearer;
export declare class ApplyEnvironmentManagedActionCommand extends $Command<ApplyEnvironmentManagedActionCommandInput, ApplyEnvironmentManagedActionCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: ApplyEnvironmentManagedActionCommandInput;
    constructor(input: ApplyEnvironmentManagedActionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ApplyEnvironmentManagedActionCommandInput, ApplyEnvironmentManagedActionCommandOutput>;
    private serialize;
    private deserialize;
}
