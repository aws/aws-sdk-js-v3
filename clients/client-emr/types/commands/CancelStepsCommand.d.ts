import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { CancelStepsInput, CancelStepsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelStepsCommandInput = CancelStepsInput;
export declare type CancelStepsCommandOutput = CancelStepsOutput & __MetadataBearer;
export declare class CancelStepsCommand extends $Command<CancelStepsCommandInput, CancelStepsCommandOutput, EMRClientResolvedConfig> {
    readonly input: CancelStepsCommandInput;
    constructor(input: CancelStepsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelStepsCommandInput, CancelStepsCommandOutput>;
    private serialize;
    private deserialize;
}
