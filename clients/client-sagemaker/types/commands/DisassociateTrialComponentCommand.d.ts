import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DisassociateTrialComponentRequest, DisassociateTrialComponentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateTrialComponentCommandInput = DisassociateTrialComponentRequest;
export declare type DisassociateTrialComponentCommandOutput = DisassociateTrialComponentResponse & __MetadataBearer;
export declare class DisassociateTrialComponentCommand extends $Command<DisassociateTrialComponentCommandInput, DisassociateTrialComponentCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DisassociateTrialComponentCommandInput;
    constructor(input: DisassociateTrialComponentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateTrialComponentCommandInput, DisassociateTrialComponentCommandOutput>;
    private serialize;
    private deserialize;
}
