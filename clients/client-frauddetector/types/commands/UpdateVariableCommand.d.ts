import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateVariableRequest, UpdateVariableResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateVariableCommandInput = UpdateVariableRequest;
export declare type UpdateVariableCommandOutput = UpdateVariableResult & __MetadataBearer;
export declare class UpdateVariableCommand extends $Command<UpdateVariableCommandInput, UpdateVariableCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: UpdateVariableCommandInput;
    constructor(input: UpdateVariableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateVariableCommandInput, UpdateVariableCommandOutput>;
    private serialize;
    private deserialize;
}
