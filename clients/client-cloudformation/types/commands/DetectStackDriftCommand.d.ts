import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DetectStackDriftInput, DetectStackDriftOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetectStackDriftCommandInput = DetectStackDriftInput;
export declare type DetectStackDriftCommandOutput = DetectStackDriftOutput & __MetadataBearer;
export declare class DetectStackDriftCommand extends $Command<DetectStackDriftCommandInput, DetectStackDriftCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: DetectStackDriftCommandInput;
    constructor(input: DetectStackDriftCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectStackDriftCommandInput, DetectStackDriftCommandOutput>;
    private serialize;
    private deserialize;
}
