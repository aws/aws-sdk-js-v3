import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DetectStackSetDriftInput, DetectStackSetDriftOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetectStackSetDriftCommandInput = DetectStackSetDriftInput;
export declare type DetectStackSetDriftCommandOutput = DetectStackSetDriftOutput & __MetadataBearer;
export declare class DetectStackSetDriftCommand extends $Command<DetectStackSetDriftCommandInput, DetectStackSetDriftCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: DetectStackSetDriftCommandInput;
    constructor(input: DetectStackSetDriftCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectStackSetDriftCommandInput, DetectStackSetDriftCommandOutput>;
    private serialize;
    private deserialize;
}
