import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateCustomAvailabilityZoneMessage, CreateCustomAvailabilityZoneResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCustomAvailabilityZoneCommandInput = CreateCustomAvailabilityZoneMessage;
export declare type CreateCustomAvailabilityZoneCommandOutput = CreateCustomAvailabilityZoneResult & __MetadataBearer;
export declare class CreateCustomAvailabilityZoneCommand extends $Command<CreateCustomAvailabilityZoneCommandInput, CreateCustomAvailabilityZoneCommandOutput, RDSClientResolvedConfig> {
    readonly input: CreateCustomAvailabilityZoneCommandInput;
    constructor(input: CreateCustomAvailabilityZoneCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCustomAvailabilityZoneCommandInput, CreateCustomAvailabilityZoneCommandOutput>;
    private serialize;
    private deserialize;
}
