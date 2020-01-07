import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { CheckDNSAvailabilityMessage, CheckDNSAvailabilityResultMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CheckDNSAvailabilityCommandInput = CheckDNSAvailabilityMessage;
export declare type CheckDNSAvailabilityCommandOutput = CheckDNSAvailabilityResultMessage & __MetadataBearer;
export declare class CheckDNSAvailabilityCommand extends $Command<CheckDNSAvailabilityCommandInput, CheckDNSAvailabilityCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: CheckDNSAvailabilityCommandInput;
    constructor(input: CheckDNSAvailabilityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CheckDNSAvailabilityCommandInput, CheckDNSAvailabilityCommandOutput>;
    private serialize;
    private deserialize;
}
