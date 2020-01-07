import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { SkipWaitTimeForInstanceTerminationInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SkipWaitTimeForInstanceTerminationCommandInput = SkipWaitTimeForInstanceTerminationInput;
export declare type SkipWaitTimeForInstanceTerminationCommandOutput = __MetadataBearer;
export declare class SkipWaitTimeForInstanceTerminationCommand extends $Command<SkipWaitTimeForInstanceTerminationCommandInput, SkipWaitTimeForInstanceTerminationCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: SkipWaitTimeForInstanceTerminationCommandInput;
    constructor(input: SkipWaitTimeForInstanceTerminationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SkipWaitTimeForInstanceTerminationCommandInput, SkipWaitTimeForInstanceTerminationCommandOutput>;
    private serialize;
    private deserialize;
}
