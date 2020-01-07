import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { PutAttributesRequest, PutAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutAttributesCommandInput = PutAttributesRequest;
export declare type PutAttributesCommandOutput = PutAttributesResponse & __MetadataBearer;
export declare class PutAttributesCommand extends $Command<PutAttributesCommandInput, PutAttributesCommandOutput, ECSClientResolvedConfig> {
    readonly input: PutAttributesCommandInput;
    constructor(input: PutAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAttributesCommandInput, PutAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
