import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { SwapEnvironmentCNAMEsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SwapEnvironmentCNAMEsCommandInput = SwapEnvironmentCNAMEsMessage;
export declare type SwapEnvironmentCNAMEsCommandOutput = __MetadataBearer;
export declare class SwapEnvironmentCNAMEsCommand extends $Command<SwapEnvironmentCNAMEsCommandInput, SwapEnvironmentCNAMEsCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: SwapEnvironmentCNAMEsCommandInput;
    constructor(input: SwapEnvironmentCNAMEsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SwapEnvironmentCNAMEsCommandInput, SwapEnvironmentCNAMEsCommandOutput>;
    private serialize;
    private deserialize;
}
