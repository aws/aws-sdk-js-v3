import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { ResolveCaseRequest, ResolveCaseResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResolveCaseCommandInput = ResolveCaseRequest;
export declare type ResolveCaseCommandOutput = ResolveCaseResponse & __MetadataBearer;
export declare class ResolveCaseCommand extends $Command<ResolveCaseCommandInput, ResolveCaseCommandOutput, SupportClientResolvedConfig> {
    readonly input: ResolveCaseCommandInput;
    constructor(input: ResolveCaseCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SupportClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResolveCaseCommandInput, ResolveCaseCommandOutput>;
    private serialize;
    private deserialize;
}
