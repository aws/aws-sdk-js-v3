import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { ConfigureHealthCheckInput, ConfigureHealthCheckOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ConfigureHealthCheckCommandInput = ConfigureHealthCheckInput;
export declare type ConfigureHealthCheckCommandOutput = ConfigureHealthCheckOutput & __MetadataBearer;
export declare class ConfigureHealthCheckCommand extends $Command<ConfigureHealthCheckCommandInput, ConfigureHealthCheckCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: ConfigureHealthCheckCommandInput;
    constructor(input: ConfigureHealthCheckCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConfigureHealthCheckCommandInput, ConfigureHealthCheckCommandOutput>;
    private serialize;
    private deserialize;
}
