import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { AssociateTrialComponentRequest, AssociateTrialComponentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateTrialComponentCommandInput = AssociateTrialComponentRequest;
export declare type AssociateTrialComponentCommandOutput = AssociateTrialComponentResponse & __MetadataBearer;
export declare class AssociateTrialComponentCommand extends $Command<AssociateTrialComponentCommandInput, AssociateTrialComponentCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: AssociateTrialComponentCommandInput;
    constructor(input: AssociateTrialComponentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateTrialComponentCommandInput, AssociateTrialComponentCommandOutput>;
    private serialize;
    private deserialize;
}
