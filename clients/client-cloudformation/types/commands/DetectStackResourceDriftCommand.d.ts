import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DetectStackResourceDriftInput, DetectStackResourceDriftOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetectStackResourceDriftCommandInput = DetectStackResourceDriftInput;
export declare type DetectStackResourceDriftCommandOutput = DetectStackResourceDriftOutput & __MetadataBearer;
export declare class DetectStackResourceDriftCommand extends $Command<DetectStackResourceDriftCommandInput, DetectStackResourceDriftCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: DetectStackResourceDriftCommandInput;
    constructor(input: DetectStackResourceDriftCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectStackResourceDriftCommandInput, DetectStackResourceDriftCommandOutput>;
    private serialize;
    private deserialize;
}
